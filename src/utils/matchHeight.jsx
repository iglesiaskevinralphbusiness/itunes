export default function matchheight(classname, perItems) {
  let maxH = 0;
  let row = 0;
  let rows = [];
  const list = document.getElementsByClassName(classname);
  const total = list.length;

  for (var i = 0; i < total; i++) {
    const l = document.getElementsByClassName(classname)[i].clientHeight;
    const mod = (i + 1) % perItems;

    if (mod == 0) {
      rows[row] = maxH;
      maxH = 0;
      row++;
    } else {
      if (maxH < l) {
        maxH = l;
      }
    }
  }

  let ctr = 0;
  row = 0;
  for (var i = 0; i < total; i++) {
    if (row >= perItems) {
      ctr++;
      row = 0;
    }

    document.getElementsByClassName(classname)[i].style.height =
      rows[ctr] + "px";
    row++;
  }
}
