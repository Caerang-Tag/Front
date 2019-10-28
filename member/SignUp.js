function isSame(){
  var pw = document.getElementById('pw');
  var pwCheck= document.getElementById('pwCheck');
  var same = document.getElementById('same');
  
  if(Math.abs(pw.value.length - 11) > 5){
    window.alert('비밀번호는 6글자 이상, 16글자 이하만 사용 가능합니다.')
    pw.value = pwCheck.value = '';
    same.textContent='';
  }
  if(pw.value!='' && pwCheck.value!=''){
    same.textContent = '비밀번호가 '+ (pw.value==pwCheck.value? '일치합니다.' : '일치하지 않습니다.');
    same.style.color= pw.value==pwCheck.value ? 'blue' : 'red';
  }
}