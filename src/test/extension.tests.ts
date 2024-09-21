import * as assert from 'assert';

import * as vscode from 'vscode';
import * as hex from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});
