handleBarCodeScanned = async({type, data})=>{
      this.setState({
        scanned: true,
        scannedData: data,
        buttonState: 'normal'
      });
}
