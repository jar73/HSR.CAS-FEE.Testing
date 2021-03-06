//-start---------------- CAS FEE Test Infrastructure ------------------------\\
/**
 *  - Set local transaction.js file as SUT.
 *  - All specs from folders
 *    * 3-spec
 *    will run test with local bank-account.js file.
 */
process.env.bankaccount = '../4-solution/bank-account';

/**
 * Load previously defined spec files.
 */
const Spec = require('../3-spec/bank-account.spec');
//-end------------------ CAS FEE Test Infrastructure ------------------------\\


const BankAccount = require('./bank-account');

/**
 * Test First Development
 * 1. Write spec
 * 2. Run tests -> tests fail
 * 3. Implement feature & run tests again until they pass
 */
 
 // 100$ bank account test suite
describe('A bank account with balance of 100$', function() {
	beforeEach(function() {
		this.account = new BankAccount();
		this.account.balance = 100;
	});

	it('should return false when withdraw of balance lower than or equals 0$', function() {
		expect(this.account.withdraw(0)).toBeFalse();
	});
});
