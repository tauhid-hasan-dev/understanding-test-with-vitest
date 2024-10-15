import { describe, it, expect, beforeEach } from 'vitest';
import { User } from './hooks';

describe('User', () => {
    const testEmail = 'test@test.com';
    let user;
    
    //! without beforeEach hook, we would have to create a new user instance in each test, and should store the provided email value would fail

    beforeEach(() => {
        user = new User(testEmail);
    });

    it('should have an email property', () => {
        expect(user).toHaveProperty('email');
    });

    it('should update the email property', () => {
        const newEmail = 'test@example.com';
        user.updateEmail(newEmail);
        expect(user.email).toBe(newEmail);
    });

    it('should store the provided email value', () => {
        expect(user.email).toBe(testEmail);
    });

    it('should clear the email property', () => {
        user.clearEmail();
        expect(user.email).toBe('');
    });
});

