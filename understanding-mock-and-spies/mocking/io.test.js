// mocking 
import { promises as fs } from 'fs';
import {it, expect, vi} from 'vitest';
import { saveTokenToFile } from './io';

vi.mock('fs'); // mock the fs module (every methods) to prevent writing to the file system when testing 

it('should store the token to the file', () => {    
    const data = 'dummy token';
    const filename = 'token.txt';

    saveTokenToFile(data, filename);

    // expect(saveTokenToFile(data, filename)).resolves.toBeUndefined(); (if we use this there will be token.txt file created in the root directory)
    expect(fs.writeFile).toHaveBeenCalled();
});


