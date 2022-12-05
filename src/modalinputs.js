document.addEventListener('DOMContentLoaded', function (e) {
  // default
  const els = document.querySelectorAll('.js-select');
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });
  // seachable
  // var options = { searchable: true };
  // NiceSelect.bind(document.getElementById("seachable-select"), options);
  const phoneInputs = document.querySelectorAll('.js-mask');
  for (let i = 0; i < phoneInputs.length; i++) {
    const phone = phoneInputs[i];
    const mask = IMask(phone, {
      mask: '{+38} (000) 000-00-00',
    });
  }
});
