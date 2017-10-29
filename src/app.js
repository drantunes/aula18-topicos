import Vue from 'vue';
import VueMaterial from 'vue-material';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

window.Vue = Vue;
window.firebase = firebase;
Vue.use(VueMaterial);

var config = {
    apiKey: "AIzaSyCS1wQqkLap8XQcxASpXePzU75RfZrtaXw",
    authDomain: "cloudfunctions-3788f.firebaseapp.com",
    databaseURL: "https://cloudfunctions-3788f.firebaseio.com",
    projectId: "cloudfunctions-3788f",
    storageBucket: "cloudfunctions-3788f.appspot.com",
    messagingSenderId: "315226262044"
};
firebase.initializeApp(config);
window.db = firebase.firestore();
// firebase.firestore().enablePersistence();

const app = new Vue({
    el: "#app",
    data: {
        usuarios: [],
        nome: '',
        idade: '',
    },
    methods: {
        addUser() {
            db.collection("usuarios").add({
                nome: this.nome,
                idade: this.idade
            })
            .then( doc => console.log(doc.id) )
            .catch( error => console.error("Erro ao add document: ", error));
        }
    },
    mounted() {
        db.collection("usuarios")
        .where("idade", ">", "30")
        .orderBy("idade")
        .limit(3)
        .get()
        .then(docs => {
            this.usuarios = [];
            docs.forEach( doc => {
                this.usuarios.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    idade: doc.data().idade
                })
            })
        });

        // .onSnapshot( docs => {
        //         this.usuarios = [];
        //         docs.forEach( doc => {
        //                 this.usuarios.push({
        //                     id: doc.id,
        //                     nome: doc.data().nome,
        //                     idade: doc.data().idade
        //                 })
        //         })
        // });

        db.collection("usuarios")
        .doc("06bYpyBO6VQ5HHZQyL0B")
        .get().then(doc => {
            if(doc.exists) {
                console.log(doc.data())
            }
        });
    }
});
