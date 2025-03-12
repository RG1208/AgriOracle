import tensorflow as tf

from tensorflow.keras.models import Sequential

from tensorflow.keras.layers import Dense, Dropout, GlobalAveragePooling2D

from tensorflow.keras.applications import MobileNetV2

import numpy as np

import matplotlib.pyplot as plt

import os

import cv2

import random



# Data Directory

data_dir = r"C:\Users\risha\OneDrive\Desktop\potato"

img_size = (224, 224)  # MobileNetV2 input size

batch_size = 32



# Load dataset using OpenCV

def load_data(directory):

    images, labels = [], []

    class_names = sorted(os.listdir(directory))  # Ensure consistent class order

    class_indices = {name: idx for idx, name in enumerate(class_names)}



    for label in class_names:

        class_path = os.path.join(directory, label)

        if os.path.isdir(class_path):

            for img_file in os.listdir(class_path):

                img_path = os.path.join(class_path, img_file)

                img = cv2.imread(img_path)  # Read image using OpenCV

                if img is not None:

                    img = cv2.resize(img, img_size)  # Resize to (224,224)

                    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB

                    images.append(img)

                    labels.append(class_indices[label])



    return np.array(images), np.array(labels), class_names



# Load images & labels

images, labels, class_names = load_data(data_dir)



# Normalize images (scale pixel values to [0,1])

images = images / 255.0



# Shuffle data

combined = list(zip(images, labels))

random.shuffle(combined)

images, labels = zip(*combined)

images, labels = np.array(images), np.array(labels)



# Split into training & validation sets (80% train, 20% validation)

split_idx = int(0.8 * len(images))

train_images, val_images = images[:split_idx], images[split_idx:]

train_labels, val_labels = labels[:split_idx], labels[split_idx:]



# Create TensorFlow datasets

train_dataset = tf.data.Dataset.from_tensor_slices((train_images, train_labels)).batch(batch_size).shuffle(1000)

val_dataset = tf.data.Dataset.from_tensor_slices((val_images, val_labels)).batch(batch_size)



# Load Pretrained MobileNetV2 Model

base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

base_model.trainable = False  # Freeze base model initially



# Build Model

model = Sequential([

    base_model,

    GlobalAveragePooling2D(),

    Dense(128, activation='relu'),

    Dropout(0.2),

    Dense(len(class_names), activation='softmax')

])



# Compile with Learning Rate Decay

lr_schedule = tf.keras.optimizers.schedules.ExponentialDecay(

    initial_learning_rate=0.002, decay_steps=100, decay_rate=0.9, staircase=True

)

optimizer = tf.keras.optimizers.Adam(learning_rate=lr_schedule)



model.compile(optimizer=optimizer, loss='sparse_categorical_crossentropy', metrics=['accuracy'])



# Train Model

model.fit(train_dataset, epochs=100, validation_data=val_dataset)



# Fine-Tune Model (Unfreeze Last Few Layers)

base_model.trainable = True

for layer in base_model.layers[:-20]:  # Keep first 20 layers frozen

    layer.trainable = False



# Recompile with Lower Learning Rate

model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0002),

              loss='sparse_categorical_crossentropy', metrics=['accuracy'])



# Continue Training

model.fit(train_dataset, epochs=70, validation_data=val_dataset)



# Evaluate Model

test_loss, test_acc = model.evaluate(val_dataset)

print(f"Validation Accuracy: {test_acc:.2%}")



# Predictions on Sample Image

random_idx = np.random.randint(len(val_images))

sample_image = val_images[random_idx]

sample_label = val_labels[random_idx]



predictions = model.predict(np.expand_dims(sample_image, axis=0))

predicted_index = np.argmax(predictions[0])

predicted_label = class_names[predicted_index]



# Display Sample Image

plt.imshow(sample_image)

plt.title(f"Predicted: {predicted_label} | Actual: {class_names[sample_label]}")

plt.axis('off')

plt.show()



# Save the trained model

model.save("potato_classification_model.h5")

print("Model saved successfully!")