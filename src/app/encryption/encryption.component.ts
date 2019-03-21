import { Component, OnInit } from "@angular/core";
declare var writeMsgToCanvas, loadIMGtoCanvas;
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
    loadIMGtoCanvas(
      "file",
      "canvas",
      () => {
        const isEncrypted = writeMsgToCanvas(
          "canvas",
          this.text,
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
