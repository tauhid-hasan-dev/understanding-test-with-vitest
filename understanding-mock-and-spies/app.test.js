import { describe, it, expect } from "vitest";
import { generateToken } from "./app";



describe("generateToken", () => {
    it("should execute if logger function is provided", () => {
        generateToken()
    });
});