import { useEffect, useLayoutEffect } from 'react';

function someFunc() {
  useLayoutEffect(() => {}, []);
  // використовується коли треба зробити якісь дії зДОМ деревом напряму скроли сторінки наприклад()

  useEffect(() => {}, []);
  // використовується для фетчів, записи, запити
}
