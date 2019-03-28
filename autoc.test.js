const autoCorrelation = require('./autoc');

test('autoCorrelation(x)', () => {
    let x = [1, 2, 3, 4];
    let c = autoCorrelation(x);
    expect(c).toEqual(expect.arrayContaining([30, 20, 11, 4]));
});

test('autoCorrelation(x, true)', () => {
    let x = [1, 2, 3, 4];
    let c = autoCorrelation(x, true);
    expect(c).toEqual(expect.arrayContaining([30 / 30, 20 / 30, 11 / 30, 4 / 30]));
});

test('autoCorrelation(x, true, true)', () => {
    let x = [1, 2, 3, 4];
    let c = autoCorrelation(x, true, true);
    expect(c).toEqual(expect.arrayContaining([30 / 30 * 4, 20 / 30 * 4, 11 / 30 * 4, 4 / 30 * 4]));
});

test('autoCorrelation(x, false, true)', () => {
    let x = [1, 2, 3, 4];
    let c = autoCorrelation(x, false, true);
    expect(c).toEqual(expect.arrayContaining([30 * 4, 20 * 4, 11 * 4, 4 * 4]));
});
