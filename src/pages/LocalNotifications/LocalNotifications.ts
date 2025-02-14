import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications'

@Component({
    selector: 'page-home',
    templateUrl: 'LocalNotifications.html'
})
export class LocalNotificationsPage {
    constructor(public navCtrl : NavController, public alertCtrl:AlertController, private plt:Platform, private localNotifications : LocalNotifications){
        this.plt.ready().then((rdy)=>{
            this.localNotifications.on('click', (notification, state)=>{
               
                let json = JSON.parse(notification.data);
                let alert=this.alertCtrl.create({
                    title:notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
    }
    scheduleNotification(){
            this.localNotifications.schedule({
                id:1,
                title: 'Attention', 
                text: 'Notification,',
                at: new Date(new Date().getTime()+5*1000),
                data: {madata : 'My hidden message this is' }
            });

    }
}