import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};
  public loading: any;
  


  constructor(private router: Router, public afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
  }


  async login() {
    try {
      await this.authService.login(this.userLogin);
      this.router.navigateByUrl('/app/tabs/tab4');
    } catch (error) {
      this.presentToast(error.message);
    }
  }

  async navCriarConta() {
    this.router.navigateByUrl('/criar');
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde... ' });
    duration: 2000;
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }


}
