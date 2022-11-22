import { Injectable } from '@angular/core';
import { AlertsService } from './basic/alerts.service';
import { LoadingService } from './basic/loading.service';
import { StringsService } from './basic/strings.service';
import { GeolocationsService } from './geolocations.service';
import {
  LaunchNavigator,
  LaunchNavigatorOptions,
} from '@ionic-native/launch-navigator/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Browser } from '@capacitor/browser';
import { Config } from '../config/main.config';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    public loading: LoadingService,
    public alerts: AlertsService,
    public strings: StringsService,
    public geolocations: GeolocationsService,
    private launchNavigator: LaunchNavigator,
    private iab: InAppBrowser
  ) {}

  showLoader(msg = 'Please wait...') {
    return this.loading.showLoader(msg);
  }

  hideLoader() {
    // return this.loading.hideLoader();
  }

  showAlert(msg) {
    return this.alerts.showAlert(msg);
  }

  presentToast(msg) {
    return this.alerts.presentToast(msg);
  }

  presentSuccessToast(msg) {
    return this.alerts.presentSuccessToast(msg);
  }

  presentFailureToast(msg) {
    return this.alerts.presentFailureToast(msg);
  }

  presentConfirm(
    okText = 'OK',
    cancelText = 'Cancel',
    title = 'Are You Sure?',
    message = ''
  ): Promise<boolean> {
    return this.alerts.presentConfirm(
      (okText = okText),
      (cancelText = cancelText),
      (title = title),
      (message = message)
    );
  }

  onkeyupFormatPhoneNumberRuntime(phoneNumber, last = true) {
    return this.strings.formatPhoneNumberRuntime(phoneNumber);
  }

  /* Geolocations */

  public openDirectionInMap(destination) {
    this.launchNavigator.navigate(destination);
  }

  getCoordsForGeoAddress(address, _default = true) {
    return this.geolocations.getCoordsForGeoAddress(address, (_default = true));
  }

  getCoordsViaHTML5Navigator() {
    return this.geolocations.getCoordsViaHTML5Navigator();
  }

  getCurrentLocationCoordinates() {
    return this.geolocations.getCurrentLocationCoordinates();
  }

  openExternalUrl(url, target = '_self') {
    console.log('Opening', url);
    Browser.open({ url });
  }

  openInternalUrl(url) {
    const _url = `${Config.URL}public/${url}`;
    Browser.open({ url: _url });
  }

  isNullOrEmpty(val) {
    return val === null || val === undefined || val === '';
  }

  calculateTime(past) {
    //var past = new Date('2015-06-24 19:57:00');
    // console.log(past);

    past = Date.parse(past);
    //  console.log('Parsed', past);
    var now = Date.parse(new Date().toISOString());
    var diff = this.msToTime(now - past);

    //  console.log(diff.toString());
    return diff;
  }

  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    if (hrs == 0 && mins == 0) return 'just a moment ago';
    else if (hrs == 0) return mins + ' mins ago';
    else if (hrs < 24) return hrs + ' hours ago';
    else return Math.floor(hrs / 24) + ' days ago';
  }
}
