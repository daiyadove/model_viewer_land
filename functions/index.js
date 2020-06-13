const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()
const path = require('path');
const fs = require('fs');
const db = admin.firestore();


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.registFire = functions.storage.bucket('anyr-land.appspot.com').object().onFinalize(async (object) => {
  const folderName = object.name.split('/')[0]
  const bucket = admin.storage().bucket('anyr-land.appspot.com');
  const folderPath = path.join(bucket, folderName);
  const fileNames = fs.readdirSync(folderPath);
  console.log(fileNames)
  console.log('added')
});

exports.testRegistFire = functions.https.onRequest((request, response) => {
  const objectString = 'Scifi Motorcycle Project_MX/Scifi Motorcycle Project_MX.usdz'
  const folderName = objectString.split('/')[0]
  const fileName = objectString.split('/')[1]
  const fieldTitle = fileName.indexOf('.usdz') ? 'iosSrc' : 'src'
  let isExists = true
  // altでfolderNameを検索してあればフィールド追加のみ
  // なければドキュメント作成から
  const bucket = admin.storage().bucket('anyr-land.appspot.com');
  db.collection("models").where("alt", "==", folderName)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.set({
        'iosSrc': objectString,
        'alt': folderName
      },{
        merge: true
      })
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
  if (isExists) {
    
  }


  console.log('test added')
});
