import { describe, it, expect, vi } from "vitest";
import { generateToken } from "./app";

// spy on the log function
describe("generateToken", () => {
    it("should execute if logger function is provided", () => {
        const loggerSpyFn = vi.fn(); // create a spy function
        generateToken(loggerSpyFn);
        expect(loggerSpyFn).toHaveBeenCalled();
    });
});