import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {Platform} from '@ionic/angular';





@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  public userRegister: User = {};

  private loading: any;

  public radius: string = "49";



  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private platform: Platform) { }

  ngOnInit() {
    console.log(this.radius);
    
  }

  mudarRadius(){
    this.platform.ready().then(() =>{
      this.radius = "10"
    })
  }

  async logout() {
    this.router.navigateByUrl('/login');
  }

  
  async save() {
    this.router.navigateByUrl('/app/tabs/tab4');
  }


}
