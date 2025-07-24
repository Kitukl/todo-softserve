export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	transformIgnorePatterns: [
		'/node_modules/(?!antd|@ant-design|rc-.+|@babel/runtime).+\\.js$',
	],
}
