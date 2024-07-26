import { authHandlers } from '@mocks/handlers/auth';
import { setupServer } from 'msw/node';
import { notificationHandlers } from '@mocks/handlers/notification';
import { userHandlers } from '@mocks/handlers/user';

// Setup requests interception using the given handlers
export const server = setupServer(...authHandlers, ...userHandlers, ...notificationHandlers);
