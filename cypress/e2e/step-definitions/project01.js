
const { Given,Then,When } = require("@badeball/cypress-cucumber-preprocessor")
const Project01 = require("../../pages/project01")
const project = new Project01()

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	project.getHeading().should('have.text', heading)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project.getTableHeaders().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	project.getTableRows().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (buttonName) => {
	project.getButtonByLabel(buttonName).should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	project.getTotal().should('have.text',total)
})

When(/^the user clicks on the "([^"]*)" button$/, (buttonName) => {
	project.getButtonByLabel(buttonName).click()
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (newProductHeader) => {
	project.getAddNewProductHeader().should('have.text', newProductHeader)
})


Then(/^the user should see the label$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project.getAddProductsLable().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project.getRowInfo().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})


Then(/^the user should see the input box is enabled$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project.getAddProductInputField().each((el, index) => {
		cy.wrap(el).should('have.attr', 'id', arr[index].toLowerCase())
	})
})

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	project.getAddNewProductHeader().should('not.exist')
})


Then(/^the user enters the following inputs$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	project.getAddProductInputField().each((el,index) => {
		cy.wrap(el).type(arr[index])
	})
});
