import React, { Component } from "react";
import { Grid, Accordion, Icon, Divider, Segment } from "semantic-ui-react";
import ViewTable from "../components/ViewTable/ViewTable";
import LineChart from "../components/LineChart/LineChart";
import MeasureSegment from "../components/MeasureSegment/MeasureSegment";
import MasterProgressBar from "../components/MasterProgressBar/MasterProgressBar";
import DateComponent from "../components/DateComponent/DateComponent";
import AddAdmin from "../components/Form/AddAdmin";
import AddPractice from "../components/Form/AddPractice";
import AddTin from "../components/Form/AddTin";
import PracticeInfo from "../components/Form/PracticeInfo";
import ListExport from "../components/ListExport/ListExport";
import MasterClinicianGrid from "../components/MasterClinicianGrid/MasterClinicianGrid";
import MasterDataTables from "../components/MasterDataTables/MasterDataTables";
import MasterFIGmdListView from "../components/MasterFIGmdListView/MasterFIGmdListView";
import MasterPaymentDetails from "../components/MasterPaymentDetails/MasterPaymentDetails";
import MasterPracticeGrid from "../components/MasterPracticeGrid/MasterPracticeGrid";
import MasterTab from "../components/MasterTab/MasterTab";
import MeasureDetailsHeader from "../components/MeasureDetailsHeader/MeasureDetailsHeader";
import DefaultProps from "../json/DefaultProps.json";

class ComponentBuilding extends Component {
  constructor(props) {
    super(props);
  }

  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Grid style={{ padding: "5rem 5rem" }}>
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>1.Measure Segment:</h1>
            </Grid.Row>
            <Grid.Row>
              <MeasureSegment />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.MeasureSegment, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>2.View Table:</h1>
            </Grid.Row>
            <Grid.Row>
              <ViewTable />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <div>
                    <pre>{JSON.stringify(DefaultProps.ViewTable, null, 2)}</pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>3.Line Chart:</h1>
            </Grid.Row>
            <Grid.Row>
              <LineChart />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <div>
                    <pre>{JSON.stringify(DefaultProps.LineChart, null, 2)}</pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>4.Master Clinician Grid:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterClinicianGrid />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <div>
                    <pre>
                      {JSON.stringify(
                        DefaultProps.MasterClinicianGrid,
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>5.Master Practice Grid:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterPracticeGrid />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.MasterPracticeGrid, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>6.Add Tin:</h1>
            </Grid.Row>
            <Grid.Row>
              <AddTin />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <div>
                    <pre>{JSON.stringify(DefaultProps.AddTin, null, 2)}</pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>7.Master Payment Details:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterPaymentDetails />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <div>
                    <pre>
                      {JSON.stringify(
                        DefaultProps.MasterPaymentDetails,
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>8.Add Practice:</h1>
            </Grid.Row>
            <Grid.Row>
              <AddPractice />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 8}
                  index={8}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.AddPractice, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>9.Add Admin:</h1>
            </Grid.Row>
            <Grid.Row>
              <AddAdmin />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 9}
                  index={9}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 9}>
                  <div>
                    <pre>{JSON.stringify(DefaultProps.AddAdmin, null, 2)}</pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>10.Measure Details Header:</h1>
            </Grid.Row>
            <Grid.Row>
              <MeasureDetailsHeader />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 10}
                  index={10}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 10}>
                  <div>
                    <pre>
                      {JSON.stringify(
                        DefaultProps.MeasureDetailsHeader,
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>11.List Export:</h1>
            </Grid.Row>
            <Grid.Row>
              <ListExport />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 11}
                  index={11}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 11}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.ListExport, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>12.Date Component:</h1>
            </Grid.Row>
            <Grid.Row>
              <DateComponent />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 12}
                  index={12}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 12}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.DateComponent, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>13.Master Data Tables:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterDataTables />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 13}
                  index={13}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 13}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.MasterDataTables, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>

        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>14.Master Tab :</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterTab />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 14}
                  index={14}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 14}>
                  <div>
                    <pre>{JSON.stringify(DefaultProps.MasterTab, null, 2)}</pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>15.Master FIGmd List View:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterFIGmdListView />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 15}
                  index={15}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 15}>
                  <div>
                    <pre>
                      {JSON.stringify(
                        DefaultProps.MasterFIGmdListView,
                        null,
                        2
                      )}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>16.Practice Info:</h1>
            </Grid.Row>
            <Grid.Row>
              <PracticeInfo />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 16}
                  index={16}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 16}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.PracticeInfo, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Row>
              <h1>17.Master Progress Bar:</h1>
            </Grid.Row>
            <Grid.Row>
              <MasterProgressBar />
            </Grid.Row>
            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 17}
                  index={17}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  <b>Default Properties</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 17}>
                  <div>
                    <pre>
                      {JSON.stringify(DefaultProps.MasterProgressBar, null, 2)}
                    </pre>
                  </div>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Divider />
      </Grid>
    );
  }
}

export default ComponentBuilding;
