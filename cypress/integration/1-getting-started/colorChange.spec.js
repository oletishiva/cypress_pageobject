import DesignEditorPage from '../../Pages/designeditor.pages'
describe('StudioDemo-->Verify Selected Colors Applied Correclty', () => {
  beforeEach(() => {
     cy.visit('/en/sweatshirtmen')
  })


  it('Select Colors from Editor and  apply for Custom Design and Verify the applied colors', () => {
    DesignEditorPage.click_designNow()
    DesignEditorPage.click_stepcolor();
    DesignEditorPage.select_colorZone('COLORZONE-1')
   // cy.get('[data-cy=color-index-3] >:nth-child(1)').should('have.css', 'background-color', 'rgb(153, 0, 0)').click()
    DesignEditorPage.click_withColorValue("color-index-3");
    DesignEditorPage.click_doneButton()

    DesignEditorPage.click_stepcolor();
    DesignEditorPage.select_colorZone('COLORZONE-2')
    DesignEditorPage.click_withColorValue("color-index-17");
    DesignEditorPage.click_doneButton()

    //Select White color from ColorZone3

    DesignEditorPage.click_stepcolor();
    DesignEditorPage.select_colorZone('COLORZONE-3')
    DesignEditorPage.click_withColorValue("color-index-0");
    DesignEditorPage.click_doneButton()

    // Compare Screenshot with Base Image to verify Colors applied

    cy.wait(5000)
    cy.get('#THREEJS > canvas').toMatchImageSnapshot();

  })


})