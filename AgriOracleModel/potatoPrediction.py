import tensorflow as tf
import numpy as np
import cv2
import os
import matplotlib.pyplot as plt

# Load the trained model
model = None
try:
    model = tf.keras.models.load_model("potato_classification_model.h5")
except Exception as e:
    print(f"Error: Unable to load the model. {e}")

# Manually define class names based on the training dataset
class_names = ["Black Scurf", "Blackleg", "Common Scab", "Dry Rot","Healthy Potatoes","Miscellaneous","Pink Rot"]  # Update with actual class labels

def preprocess_image(image_path):
    """Preprocess the image for model prediction."""
    img = cv2.imread(image_path)  # Load as color (default: BGR)
    if img is None:
        print(f"Error: Unable to read image {image_path}.")
        return None, None
    img = cv2.resize(img, (224, 224))  # Resize to match model input size
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
    img_norm = img_rgb / 255.0  # Normalize pixel values
    img_norm = np.expand_dims(img_norm, axis=0)  # Ensure correct shape
    return img_norm, img_rgb

def predict_image(image_path):
    """Predict the class label of the given image and display it."""
    if model is None:
        print("Model is not loaded. Skipping predictions.")
        return None, None

    img_norm, img_rgb = preprocess_image(image_path)
    if img_norm is None:
        return None, None
    
    prediction = model.predict(img_norm)
    print("Raw Prediction Output:", prediction)  # Debugging line
    print("Prediction Shape:", prediction.shape)

    if prediction.shape[1] != len(class_names):
        print(f"Error: Model output shape {prediction.shape} does not match expected class count {len(class_names)}.")
        return None, img_rgb
    
    predicted_index = np.argmax(prediction[0])
    
    if predicted_index >= len(class_names):  # Prevent out-of-range error
        print(f"Error: Predicted index {predicted_index} is out of range.")
        return None, img_rgb
    
    predicted_label = class_names[predicted_index]
    return predicted_label, img_rgb

def predict_images_in_folder(folder_path):
    """Process and predict all images in the given folder."""
    if model is None:
        print("Model is not loaded. Skipping predictions.")
        return
    
    if not os.path.exists(folder_path):
        print(f"Error: Folder {folder_path} does not exist.")
        return
    
    image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('jpg', 'jpeg', 'png'))]
    
    if not image_files:
        print("No valid image files found in the folder.")
        return

    for image_file in image_files:
        image_path = os.path.join(folder_path, image_file)
        predicted_label, img_rgb = predict_image(image_path)
        
        if predicted_label is not None:
            plt.imshow(img_rgb)
            plt.title(f"Predicted Label: {predicted_label}")
            plt.axis('off')
            plt.show()
            print(f"{image_file} -> Predicted Label: {predicted_label}")

# Path to your folder containing images
image_folder_path = r"C:\Users\risha\OneDrive\Desktop\test"

# Run predictions on all images in the folder
predict_images_in_folder(image_folder_path)