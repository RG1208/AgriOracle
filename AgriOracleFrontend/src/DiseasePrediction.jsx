import { useState } from 'react';
import './DiseasePrediction.css';

const DiseasePrediction = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState('');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
        setPrediction(null); // clear previous prediction
        setError('');

        try {
            const response = await fetch('http://127.0.0.1:5000/predict_disease', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setPrediction(data);
                setError('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Error uploading image');
        }
    };

    return (
        <div className="prediction-container">
            <h2 className="prediction-title">Upload Image for Disease Prediction</h2>
            <input type="file" onChange={handleImageUpload} accept="image/*" className="file-input" />

            {imageUrl && !prediction && (
                <div className="result-section">
                    <p>Preview:</p>
                    <img src={imageUrl} alt="Preview" className="prediction-image" />
                </div>
            )}

            {error && <div className="error-message">{error}</div>}

            {prediction && (
                <div className="result-section">
                    <h3 className="prediction-heading">Prediction: {prediction.prediction}</h3>
                    <p className="prediction-info"><strong>Reason:</strong> {prediction.reason}</p>
                    <p className="prediction-info"><strong>Cure:</strong> {prediction.cure}</p>
                    <h4 className="processed-title">Processed Image from Server:</h4>
                    <img
                        src={`http://127.0.0.1:5000${prediction.image_url}`}
                        alt="Predicted Disease"
                        className="prediction-image"
                    />
                </div>
            )}
        </div>
    );
};

export default DiseasePrediction;
