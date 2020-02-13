import { Component, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMap } from '@ionic-native/google-maps';


declare var google: any;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {

  private search: string = '';
  private googleAutoComplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  private destination: any;

  private historicoUser = new Array<any>();

  private ptLat = 0;
  private ptLng = 0;
  private lat = 0;
  private lng = 0;
  private geocoder = new google.maps.Geocoder();
  zoom: number = 16;
  map: GoogleMap;

  private Position: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();


  public startPosition: any;
  originPosition: any;
  public destinationPosition: any;
  private novoTeste: any;
  private accuracy: any;

  private verifica = 0;


  ngOnInit() {
    this.initializeMap();
  }

  getStartPosition() {
    if (this.startPosition) {
      return this.startPosition;
    }

    return this.geolocation.getCurrentPosition()
      .then(resp => new google.maps.LatLng(
        this.ptLat = resp.coords.latitude,
        this.ptLng = resp.coords.longitude,
        this.accuracy = resp.coords.accuracy
      ));
  }

  async initializeMap() {

    await this.getStartPosition();

    this.Position = new google.maps.LatLng(this.ptLat, this.ptLng);

    const mapOptions = {
      zoom: 15,
      center: this.Position,
      disableDefaultUI: true,
      styles: [
        {
          "featureType": "poi.attraction",
          "stylers": [
            {
              "saturation": 45
            },
            {
              "weight": 3.5
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.medical",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "saturation": 50
            },
            {
              "lightness": -15
            },
            {
              "weight": 3
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.sports_complex",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "saturation": 100
            },
            {
              "lightness": -25
            },
            {
              "visibility": "simplified"
            }
          ]
        }
      ]
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    /**Adiciona um marcador no mapa, mostrando a localização atual */
    var marker = new google.maps.Marker({
      position: this.Position,
      map: this.map,
      title: "Você esta aqui",
      animation: google.maps.Animation.DROP,
      icon: 'assets/icon/icons8-código-de-região-64 (2).png'
    });

    this.verifica = 0;

    console.log('Position ' + this.Position);

  }




  async teste(item: any) {

    /**Reseta a barra de pesquisa */
    this.search = '';
    /**transforma o destination com os dados do item */
    this.destination = item;

    await this.getStartPosition();

    this.geocoder.geocode({ 'address': this.destination.description }, async (results, status) => {
      /**Verificar se o status esta como "OK" */

      if (status == google.maps.GeocoderStatus.OK) {
        /**Latitude e longitude da posição destino */
        this.lat = results[0].geometry.location.lat(),
          this.lng = results[0].geometry.location.lng()

      } else {
        console.log("Request failed.");
      }

      this.novoTeste = new google.maps.LatLng(this.lat, this.lng);

      /**Carrega o mapa  */
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: this.novoTeste,
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "poi.attraction",
            "stylers": [
              {
                "saturation": 45
              },
              {
                "weight": 3.5
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.government",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.medical",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "stylers": [
              {
                "saturation": 50
              },
              {
                "lightness": -15
              },
              {
                "weight": 3
              }
            ]
          },
          {
            "featureType": "poi.place_of_worship",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.school",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.sports_complex",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.local",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "water",
            "stylers": [
              {
                "saturation": 100
              },
              {
                "lightness": -25
              },
              {
                "visibility": "simplified"
              }
            ]
          }
        ]
      });

      /**Adiciona o marcador na pesquisa */
      var marker = new google.maps.Marker({
        position: this.novoTeste,
        map: this.map,
        icon: "https://img.icons8.com/ultraviolet/40/000000/marker.png"
      });

      this.Position = new google.maps.LatLng(this.ptLat, this.ptLng);

      this.verifica = 1;

    });
  }

  geocode() {

    this.destination;
    console.log(this.destination);

    this.verifica = 1;

    if (this.destination == undefined)
      return alert('Favor pesquisar um local antes! :D');



    this.geocoder.geocode({ 'address': this.destination.description }, async (results, status) => {
      /**Verificar se o status esta como "OK" */

      if (status == google.maps.GeocoderStatus.OK) {
        /**Latitude e longitude da posição destino */
        this.lat = results[0].geometry.location.lat(),
          this.lng = results[0].geometry.location.lng()

      } else {
        console.log("Request failed.");
      }

      this.novoTeste = new google.maps.LatLng(this.lat, this.lng);

      /**Carrega o mapa  */
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: this.novoTeste,
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "poi.attraction",
            "stylers": [
              {
                "weight": 1.5
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.government",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.medical",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.place_of_worship",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.school",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.sports_complex",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      });

      await this.getStartPosition();

      var directionsDisplay = new google.maps.DirectionsRenderer({ map: this.map });

      this.destination = new google.maps.LatLng(this.lat, this.lng);
      this.Position = new google.maps.LatLng(this.ptLat, this.ptLng);

      var request = {
        origin: this.Position,
        destination: this.destination,
        travelMode: 'DRIVING'
      };
      this.directionsService.route(request, function (result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      });

      var link: string = 'https://www.google.com/maps/dir/' + this.ptLat + ',' + this.ptLng + '/@' + this.ptLat + ',' + this.ptLng + 'z/' + this.lat + '' + this.lng;

      console.log('Link: ' + link);



      console.log('Position: ' + this.Position);
      console.log('Destination: ' + this.destination);

      if (confirm("Gostaria de ver a rota no Maps?")) {
        window.open(link);
      }


    })


  }

  async createRoute() {

    await this.getStartPosition();

    await this.geocode();

    this.Position = new google.maps.LatLng(this.ptLat, this.ptLng);
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
      origin: this.Position,
      destination: this.destination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    this.directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(this.map);
      }
    });
  }


  constructor(private geolocation: Geolocation,
    private ngZone: NgZone
  ) { }


  async searchChanged() {

    await this.getStartPosition;
    this.Position = new google.maps.LatLng(this.ptLat, this.ptLng);

    this.googleAutoComplete.getPlacePredictions({
      input: this.search,
      radius: '20000',
      rankBy: 'distance',
      location: this.Position,
      type: ['tourist_attraction', 'natural_feature', 'zoo', 'amusement_park'],
      componentRestrictions: { country: 'br' }
    }, predictions => {
      for (let i = 0; i < predictions.length; i++) {
        for (let j = 0; j < predictions[i].types.length; j++) {
          if (
            predictions[i].types[j] == "tourist_attraction" ||
            predictions[i].types[j] == "natural_feature" ||
            predictions[i].types[j] == "zoo" ||
            predictions[i].types[j] == "amusement_park" ||
            predictions[i].types[j] == "museum"
          ) {
            this.ngZone.run(() => {
              this.searchResults = predictions;
            });
          }
        }
      }
      console.log(predictions);
    });



  }
}





