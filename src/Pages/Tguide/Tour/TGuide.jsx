
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TPackages from '../TPackages/TPackages';
import TOverView from '../TOverVIew/TOverVIew';
import TGuides from './TGuides';

const TGuide = () => {
    return (
        <div>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList className={"text-center mt-20 mb-20"}>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>
                <TabPanel><TOverView></TOverView></TabPanel>
                <TabPanel><TPackages></TPackages></TabPanel>
                <TabPanel><TGuides></TGuides></TabPanel>
            </Tabs>
        </div>
    );
};

export default TGuide;