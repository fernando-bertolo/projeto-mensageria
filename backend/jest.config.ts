import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    // inclua a pasta dos seus fontes e, se precisar, a pasta test/
    roots: ['<rootDir>/src', '<rootDir>/test'],

    // quais arquivos contar como teste
    testMatch: [
        '<rootDir>/src/**/*.spec.ts',
        '<rootDir>/test/**/*.spec.ts',
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/test/**/*.test.ts',
    ],

    moduleFileExtensions: ['ts', 'js', 'json', 'node'],

    // mapeia o alias "@/..." para o seu src/
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    // nova sintaxe recomendada pelo ts-jest
    transform: {
        '^.+\\.(t|j)s$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
};

export default config;
