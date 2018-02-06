import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <h2 className="header--stylesheet">Form (Horizontal) &amp; Buttons</h2>
        <div className="form">
          <form id="form" name="form" action="#" method="post">
            <div className="control-group control-group--block">
              <div className="control-label">
                <label>form grid sizes</label>
              </div>
              <div className="controls">
                <input className="input--mini" type="text" placeholder=".input--mini"/>
                <input className="input--small" type="text" placeholder=".input--small" />
                <input className="input--medium" type="text" placeholder=".input--medium" />
                <input className="input--large" type="text" placeholder=".input--large" />
                <input className="input--xlarge" type="text" placeholder=".input--xlarge" />
                <input className="input--xxlarge" type="text" placeholder=".input--xxlarge" />
                <input className="input--xxxlarge" type="text" placeholder=".input--xxxlarge" />
                <input className="input--xxxxlarge" type="text" placeholder=".input--xxxxlarge" />

                <span className="select-replace input--mini">
                  <select>
                    <option>.input--mini</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--small">
                  <select>
                    <option>.input--small</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--medium">
                  <select>
                    <option>.input--medium</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--large">
                  <select>
                    <option>.input--large</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--xlarge">
                  <select>
                    <option>.input--xlarge</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--xxlarge">
                  <select>
                    <option>.input--xxlarge</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--xxxlarge">
                  <select>
                    <option>.input--xxxlarge</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>

                <span className="select-replace input--xxxxlarge">
                  <select>
                    <option>.input--xxxxlarge</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="requiredInput">Required Input</label>
              </div>
              <div className="controls">
                <input className="input--large" type="text" placeholder=".input--large" id="requiredInput" name="requiredInput" data-val="true" data-val-required="Text input validation message" />
                <span className="field-validation-message field-validation-valid" data-valmsg-for="requiredInput" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="optionalInput">Optional Input</label>
              </div>
              <div className="controls">
                <input className="input--large" type="text" placeholder=".input--large" id="optionalInput" name="optionalInput" />
                <span className="control-optional">(Optional)</span>
              </div>
            </div>
            <div className="control-group control-disabled">
              <div className="control-label">
                <label htmlFor="disabledInput">Disabled Input</label>
              </div>
              <div className="controls">
                <input className="input--large" type="text" placeholder=".input--large" id="disabledInput" name="disabledInput" disabled />
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="requiredSelect">Required Select</label>
              </div>
              <div className="controls">
                <span className="select-replace input--xxlarge">
                  <select name="requiredSelect" id="requiredSelect" data-val="true" data-val-required="Select dropdown validation message">
                    <option value="">Please select an option&hellip;</option>
                    <option value="1">1</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </select>
                </span>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="requiredSelect" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="emailInput">Email Input</label>
              </div>
              <div className="controls">
                <input className="input--large" type="email" placeholder="e.g john@example.com" name="emailInput" id="emailInput" data-val="true" data-val-required="Email input required validation message" data-val-email="Email input format validation message" />
                <span className="field-validation-message field-validation-valid" data-valmsg-for="emailInput" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="dateInput">Date Input</label>
              </div>
              <div className="controls">
                <input className="input--large" type="date" id="dateInput" />
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="adjacentControl1">Adjacent Controls</label>
              </div>
              <div className="controls">
                <input className="input--medium" type="text" placeholder="First name" id="adjacentControl1" name="adjacentControl1" data-val="true" data-val-requiredif="'Surname' also requires a 'First name'" data-val-requiredif-dependentupon="adjacentControl2" />
                <input className="input--medium" type="text" placeholder="Surname" id="adjacentControl2" name="adjacentControl2" />
                <span className="select-replace input--medium">
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="adjacentControl1" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="inlineCheckboxes">Inline checkboxes</label>
              </div>
              <div className="controls">
                <label className="checkbox control-inline" htmlFor="inlineCheckbox1" >
                  <input type="checkbox" name="inlineCheckbox1" id="inlineCheckbox1" value="option1"/>
                              <label className="checkbox--replace" htmlFor="inlineCheckbox1" role="presentation"></label>
                              Email
                </label>
                <label className="checkbox control-inline">
                  <input type="checkbox" name="inlineCheckbox2" id="inlineCheckbox2" value="option2" />
                              <label className="checkbox--replace" htmlFor="inlineCheckbox2" role="presentation"></label>
                              Post
                </label>
                <label className="checkbox control-inline">
                  <input type="checkbox" name="inlineCheckbox3" id="inlineCheckbox3" value="option3" />
                              <label className="checkbox--replace" htmlFor="inlineCheckbox3" role="presentation"></label>
                              SMS
                </label>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="optionsCheckboxList">Checkboxes</label>
              </div>
              <div className="controls">
                <label className="checkbox">
                  <input type="checkbox" value="option1" name="optionsCheckboxList" id="optionsCheckboxList1" data-val="true" data-val-atleast="Select at least {0} options" data-val-atleast-minimum="2" />
                  <label className="checkbox--replace" htmlFor="optionsCheckboxList1" role="presentation"></label>
                              Option one can be checked and included in form results
                </label>
                <label className="checkbox">
                  <input type="checkbox" value="option2" name="optionsCheckboxList" id="optionsCheckboxList2" />
                              <label className="checkbox--replace" htmlFor="optionsCheckboxList2" role="presentation"></label>
                  Option two can also be checked and included in form results
                </label>
                <label className="checkbox">
                  <input type="checkbox" value="option3" name="optionsCheckboxList" id="optionsCheckboxList3" />
                              <label className="checkbox--replace" htmlFor="optionsCheckboxList3" role="presentation"></label>
                  Option three can also be checked and included in form results
                </label>
                <label className="checkbox disabled">
                  <input type="checkbox" value="option3" name="optionsCheckboxList" id="optionsCheckboxList4" disabled />
                              <label className="checkbox--replace" htmlFor="optionsCheckboxList4" role="presentation"></label>
                  Option disabled
                </label>
                <label className="checkbox disabled">
                  <input type="checkbox" value="option3" name="optionsCheckboxList" id="optionsCheckboxList5" disabled defaultChecked />
                              <label className="checkbox--replace" htmlFor="optionsCheckboxList5" role="presentation"></label>
                  Option disabled and checked
                </label>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="optionsCheckboxList" data-valmsg-replace="true"></span>
                <p className="help-block"><strong>Note:</strong> Labels surround all the options form much larger click areas and a more usable form.</p>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Inline radio buttons</label>
              <div className="controls">
                <label className="radio control-inline">
                  <input type="radio" name="optionsInlineRadios2" id="optionsRadios_3" value="option1" data-val="true" data-val-required="Radio button validation message" />
                  <label htmlFor="optionsRadios_3" className="radio--replace"></label>
                  Yes
                </label>
                <label className="radio control-inline">
                  <input type="radio" name="optionsInlineRadios2" id="optionsRadios_4" value="option2"/>
                  <label htmlFor="optionsRadios_4" className="radio--replace"></label>
                  No
                </label>
                <label className="radio control-inline">
                  <input type="radio" name="optionsInlineRadios2" id="optionsRadios_5" value="option3"/>
                  <label htmlFor="optionsRadios_5" className="radio--replace"></label>
                  Maybe
                </label>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="optionsInlineRadios2" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Radio buttons</label>
              <div className="controls">
                <label className="radio">
                  <input type="radio" name="optionsRadios1" id="optionsRadios1" value="option1" defaultChecked />
                  <label htmlFor="optionsRadios1" className="radio--replace"></label>
                  Option one with a 'checked' attribute applied
                </label>
                <label className="radio">
                  <input type="radio" name="optionsRadios1" id="optionsRadios2" value="option2" />
                  <label htmlFor="optionsRadios2" className="radio--replace"></label>
                  Option two is something else and selecting it will deselect option one
                </label>
                <label className="radio disabled">
                  <input type="radio" name="optionsRadios1" id="optionsRadios3" value="option3" disabled />
                  <label htmlFor="optionsRadios3" className="radio--replace"></label>
                  Option disabled
                </label>
                <label className="radio disabled">
                  <input type="radio" name="optionsRadios1" id="optionsRadios4" value="option3" disabled defaultChecked />
                  <label htmlFor="optionsRadios4" className="radio--replace"></label>
                  Option disabled and checked
                </label>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="multiSelect">Multi-select</label>
              </div>
              <div className="controls">
                <select multiple="multiple" id="multiSelect" className="input--xlarge">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="fileInput">File input</label>
              </div>
              <div className="controls">
                <input className="input-file" id="fileInput" type="file" data-btn-text="Choose file" data-label-text="No file chosen" />
              </div>
            </div>
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="textarea">Textarea</label>
              </div>
              <div className="controls">
                <textarea className="input--xxxxlarge" id="textarea" name="textarea" rows="3" cols="10" data-val="true" data-val-required="Textarea validation message"></textarea>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="textarea" data-valmsg-replace="true"></span>
              </div>
            </div>

            <div className="control-group">
              <div className="control-label">
                <label htmlFor="textarea">Toggle</label>
              </div>
              <div className="controls">
                <input className="toggle-input" value="toggle-on" name="toggle-a" id="toggle-a" type="checkbox"/>
                <label className="toggle-label" htmlFor="toggle-a"></label>
              </div>
            </div>

            <div className="control-group">
              <div className="controls">
                <label className="checkbox control-inline" htmlFor="requiredCheckbox1">
                  <input type="checkbox" name="requiredCheckbox1" id="requiredCheckbox1" value="1" data-val="true" data-val-atleast="A mandatory checkbox input" data-val-atleast-minimum="1" />
                  <label className="checkbox--replace" htmlFor="requiredCheckbox1" role="presentation"></label>
                  By ticking this box you agree to the <a href="#">terms and conditions</a>
                </label>
                <span className="field-validation-message field-validation-valid" data-valmsg-for="requiredCheckbox1" data-valmsg-replace="true"></span>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn">.btn</button>
            </div>
          </form>
        </div>
      </section>

    )
  }
}

export default Form;