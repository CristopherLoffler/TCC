import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';





@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  public userRegister: User = {};

  private loading: any;



  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
  }

  async register() {

    try {
      await this.authService.register(this.userRegister);
      this.router.navigateByUrl('/login');
    } catch (error) {
      this.presentToast(error.message);
    }
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

  async navLogin() {
    this.router.navigateByUrl('/login');
  }


}
