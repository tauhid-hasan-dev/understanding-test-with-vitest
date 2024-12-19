// mocking 
import { promises as fs } from 'fs';
import { it, expect, vi } from 'vitest';
import { saveTokenToFile } from './io';

// it is an example of automatic mock creation
// mock the fs module (every methods) to prevent writing to the file system when testing 
// fs is a built-in module in node.js
// mock is hoisted to the top of the file (in vitest but for jest we need to write mock on the top of the file)
// in jest we use jest.mock('fs');
// we need to write mock on the top of the file in jest

vi.mock('fs');

it('should store the token to the file', () => {
    const data = 'dummy token';
    const filename = 'token.txt';

    saveTokenToFile(data, filename);

    // expect(saveTokenToFile(data, filename)).resolves.toBeUndefined(); (if we use this there will be token.txt file created in the root directory)
    expect(fs.writeFile).toHaveBeenCalled();
});


