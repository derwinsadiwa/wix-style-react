import React from 'react';

import { Container, Row, Col } from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import Collapse from 'wix-style-react/Collapse';

import FormField from 'wix-style-react/FormField';
import Input from 'wix-style-react/Input';
import Button from 'wix-style-react/Button';
import TextLink from '../../src/Deprecated/TextLink';
import Tooltip from 'wix-style-react/Tooltip';

export default class extends React.Component {
  state = {
    firstCardOpen: true,
    secondCardOpen: false,
  };

  render() {
    const { firstCardOpen, secondCardOpen } = this.state;

    return (
      <div style={{ background: '#F0F4F7', padding: 30 }}>
        <Container>
          <Row>
            <Col span={6}>
              <Card>
                <Card.Header
                  title="Card with collapsable content"
                  withoutDivider={!firstCardOpen}
                  suffix={
                    <Button
                      onClick={() =>
                        this.setState(state => ({
                          firstCardOpen: !state.firstCardOpen,
                        }))
                      }
                    >
                      {firstCardOpen ? 'Close' : 'Open'}
                    </Button>
                  }
                />

                <Collapse open={firstCardOpen}>
                  <Card.Content>{field()}</Card.Content>
                </Collapse>
              </Card>
            </Col>

            <Col span={6}>
              <Card>
                <Card.Header
                  title="Card with collapsable content #2"
                  withoutDivider={!secondCardOpen}
                  suffix={
                    <Tooltip
                      content={`Click me to ${
                        secondCardOpen ? 'squeeze' : 'expand'
                      }!`}
                    >
                      <TextLink
                        onClick={() =>
                          this.setState(state => ({
                            secondCardOpen: !state.secondCardOpen,
                          }))
                        }
                      >
                        {secondCardOpen ? 'Close' : 'Open'}
                      </TextLink>
                    </Tooltip>
                  }
                />

                <Collapse open={secondCardOpen}>
                  <Card.Content>{field()}</Card.Content>
                </Collapse>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function field() {
  return (
    <FormField label="Text Field">
      <Input placeholder="You can type here" />
    </FormField>
  );
}
