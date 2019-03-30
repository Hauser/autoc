const { autoCorrelation, crossCorrelation } = require('./autoc');

test('autoCorrelation([0, 2, 3, -4])', () => {
    let x = [0, 2, 3, -4];
    let c = autoCorrelation(x);
    expect(c).toEqual(expect.arrayContaining([0, -8, -6, 29, -6, -8, 0]));
});

test('autoCorrelation([0, 2, 3, -4], true)', () => {
    let x = [0, 2, 3, -4];
    let c = autoCorrelation(x, true);
    expect(c).toEqual(expect.arrayContaining([0 / 29, -8 / 29, -6 / 29, 29 / 29, -6 / 29, -8 / 29, 0 / 29]));
});

test('autoCorrelation([0, 2, 3, -4], true, true)', () => {
    let x = [0, 2, 3, -4];
    let c = autoCorrelation(x, true, true);
    expect(c).toEqual(expect.arrayContaining([0 / 29 * 4, -8 / 29 * 4, -6 / 29 * 4, 29 / 29 * 4, -6 / 29 * 4, -8 / 29 * 4, 0 / 29 * 4]));
});

test('autoCorrelation([0, 2, 3, -4], false, true)', () => {
    let x = [0, 2, 3, -4];
    let c = autoCorrelation(x, false, true);
    expect(c).toEqual(expect.arrayContaining([0 * 4, -8 * 4, -6 * 4, 29 * 4, -6 * 4, -8 * 4, 0 * 4]));
});

test('crossCorrelation([8, 9, 2, 3], [4, 3, 6])', () => {
    let x = [8, 9, 2, 3];
    let y = [4, 3, 6];
    let c = crossCorrelation(x, y);
    expect(c).toEqual(expect.arrayContaining([48, 78, 71, 60, 17, 12]));
});

test('crossCorrelation([0, 1, 2, 0, 0], [0, 0, 0, 1, 2])', () => {
    let x = [0, 1, 2, 0, 0];
    let y = [0, 0, 0, 1, 2];
    let c = crossCorrelation(x, y);
    expect(c).toEqual(expect.arrayContaining([0, 2, 5, 2, 0, 0, 0, 0, 0]));
});

test('crossCorrelation([4, 3, 6], [4, 3, 6])', () => {
    let x = [4, 3, 6];
    let y = [4, 3, 6];
    let c = crossCorrelation(x, y);
    let ac = autoCorrelation(x);
    expect(c).toEqual(expect.arrayContaining([24, 30, 61, 30, 24]));
    expect(c).toEqual(expect.arrayContaining(ac));
});
