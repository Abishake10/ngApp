declare var writeMsgToCanvas, loadIMGtoCanvas;
import { Component, OnInit } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Component({
  selector: "app-encryption",
  templateUrl: "./encryption.component.html"
})
export class EncryptionComponent implements OnInit {
  public text = "";
  public password = null;
  public encryptedImg = null;
  ngOnInit() {}

  encryptText() {
    console.log(this.text);
    const ciphertext = CryptoJS.AES.encrypt(this.text, "secret key 123");

    console.log(ciphertext);

    loadIMGtoCanvas(
      "file",
      "canvas",
      () => {
        const isEncrypted = writeMsgToCanvas(
          "canvas",
          ciphertext,
          this.password,
          0
        );
        if (isEncrypted) {
          var myCanvas = document.getElementById("canvas");
          this.encryptedImg = (<any>myCanvas).toDataURL("image/png");
        }
      },
      500
    );
  }
}
