import { Component, OnInit } from "@angular/core";
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
        this.decryptedMsg = t;
      } else this.decryptedMsg = "ERROR REAVEALING MESSAGE!";
    });
  }
}
