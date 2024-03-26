import { parseForESLint } from 'vue-eslint-parser';

const code = [
	'<script setup lang="ts">',
	'function fn() {}',
	'</script>',
].join('\n');

const { scopeManager } = parseForESLint(code, { parser: { ts: '@typescript-eslint/parser' } });
const [moduleScope] = scopeManager.globalScope.childScopes;
console.log(moduleScope.childScopes.length); // Is 0 should be one for the function declaration
