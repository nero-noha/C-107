function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/RxSW4UTx4/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img2 = document.getElementById("cat.jpg");
        img3 = document.getElementById("ferret.jpg");
        img4 = document.getElementById("horse.jpg");
        if (results[0].label == "cat") {
            img2.src = 'cat.jpg';
            img3.src = 'ferret.jpg';
            img4.src = 'horse.jpg';
        }
        } else if (results[0].label == "ferret") {
            img2.src = 'cat.jpg';
            img3.src = 'ferret.jpg';
            img4.src = 'horse.jpg';
        }
        } else if (results[0].label == "horse") {
            img2.src = 'cat.jpg';
            img3.src = 'ferret.jpg';
            img4.src = 'horse.jpg';
        }
        } else {
            img2.src = 'cat.jpg';
            img3.src = 'ferret.jpg';
            img4.src = 'horse.jpg';
        }