import test from 'ava';
import requireHtml from '../';

test(t => {
  const header = requireHtml('./fixtures/header.html');
  t.is(
    header,
    '<header>\n  <h1>Woah! such awesome website</h1>\n</header>\n'
  );
});
