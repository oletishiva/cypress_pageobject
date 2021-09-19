import DesignEditorPage from '../../Pages/designeditor.pages'
import DesignEditorUploadImagePage from '../../Pages/uploadImage.page'
const filepath = '../../cypress/images/shirtImage.jpg'
describe('Studio Demo With uploadImage', () => {
    beforeEach(() => {
        cy.visit('/en/sweatshirtmen')
    })


    it('Upload Image and Verify uploaded imaged applied or not', () => {
        DesignEditorPage.click_designNow()
        DesignEditorPage.click_stepimage()
        DesignEditorUploadImagePage.attachfile(filepath)
        DesignEditorUploadImagePage.click_Label('Edit the image')
        DesignEditorUploadImagePage.click_upload_buton()
        



        /*cy.get('input[type="file"]').attachFile(filepath)
        cy.wait(30000)
        cy.contains('Edit the image').click({ force: true }); // This locator is because when we open file attached window it is selected X
        cy.get('[data-cy=modal-upload-button]').click()
        cy.wait(5000)*/

      
        //cy.get('[data-cy=uploaded-images-section]').contains('shirtImage')

    })


})