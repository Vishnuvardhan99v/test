function changeFormat(styleNumber) {
  const styleLink = document.getElementById('style');
  let newHref = '';

  switch(styleNumber) {
    case 1:
      newHref = 'procss.css';
      break;
    case 2:
      newHref = 'format2.css';
      break;
    case 3:
      newHref = 'format3.css';
      break;
    default:
      newHref = 'procss.css';
  }

  styleLink.setAttribute('href', newHref);
}