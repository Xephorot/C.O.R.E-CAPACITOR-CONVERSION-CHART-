function pFtoAll(capacitorValue) {
    return {
      pF: capacitorValue,
      nF: capacitorValue * 0.001,
      uF: Number((capacitorValue * Math.pow(10, -6)).toFixed(6)),
      F: capacitorValue * Math.pow(10, -12)
    };
  }  
  
  function nFtoAll(capacitorValue) {
    return {
      pF: capacitorValue * 1000,
      nF: capacitorValue,
      uF: capacitorValue * 0.001,
      F: capacitorValue * Math.pow(10, -9)
    };
  }
  
  function uFtoAll(capacitorValue) {
    return {
      pF: capacitorValue * Math.pow(10, 6),
      nF: capacitorValue * 1000,
      uF: capacitorValue,
      F: capacitorValue * Math.pow(10, -6)
    };
  }
  
  function FtoAll(capacitorValue) {
    return {
      pF: capacitorValue * Math.pow(10, 12),
      nF: capacitorValue * Math.pow(10, 9),
      uF: capacitorValue * Math.pow(10, 6),
      F: capacitorValue
    };
  }
  