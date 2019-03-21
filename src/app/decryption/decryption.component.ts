import { Component, OnInit } from "@angular/core";
import * as CryptoJS from "crypto-js";

declare var loadIMGtoCanvas, readMsgFromCanvas;
@Component({
  selector: "app-decryption",
  templateUrl: "./decryption.component.html",
  styleUrls: ["./decryption.component.css"]
})
export class DecryptionComponent implements OnInit {
  public decryptedMsg = "";
  public password = null;
  constructor() {}

  ngOnInit() {}
  decryptImage() {
    loadIMGtoCanvas("file", "canvas", () => {
      var t = readMsgFromCanvas("canvas", this.password, 0);
      if (t != null) {
        // Decrypt
        const bytes = CryptoJS.AES.decrypt(t.toString(), "secret key 123");
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);

        console.log(plaintext);
        this.decryptedMsg = plaintext;
      } else this.decryptedMsg = "ERROR REAVEALING MESSAGE!";
    });
  }
}
