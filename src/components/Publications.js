import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Publications.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Publications() {
    
    useEffect(() => {
            Aos.init({duration: 1000})
        }, [])

    return (
        <Container className="publications">

            <Row>
                <Col></Col>
                <Col><p className="publications__heading">Publications</p></Col>
                <Col></Col>
            </Row>
            {/* 1 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jul 2020</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">TReND in Africa: Toward a Truly Global (Neuro)science Community</h4>
                    <p className="publications__authors">Authors: Tom Baden, Mahmoud Bukar Maina, André Maia Chagas, Yunusa Mohammed Garba, et al</p>
                    <p className="publications__desc">
                        TReND is a volunteer-scientist run charity dedicated to promoting research and education on the African continent. Focusing on neuroscience, we discuss approaches to address some of the factors that currently stifle Africa’s scientific development and our experience in implementing them.<br/>
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/343094197_TReND_in_Africa_Toward_a_Truly_Global_Neuroscience_Community">direct Link </a></p>
                    </p>
                </Col>
            </Row>
                
            {/* 2 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jun 2020</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">20 years of African Neuroscience: Waking a sleeping giant</h4>
                    <p className="publications__authors">Authors: Mahmoud Bukar Maina, umar Ahmad, Ibrahim A Haruna, Tom Baden, et al</p>
                    <p className="publications__desc">
                        Understanding the function and dysfunction of the brain remains one of the key challenges of our time. However, an overwhelming majority of brain research is carried out in the Global North, by a minority of well-funded and intimately interconnected labs. In contrast, with an estimated one neuroscientist per million people in Africa, news about neu...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/341936018_20_years_of_African_Neuroscience_Waking_a_sleeping_giant">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>
            
            {/* 3 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Sep 2019</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Social foraging extends associative odor-food memory expression in an automated learning assay for Drosophila</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Cansu Tafrali, Paul Szyszka</p>
                    <p className="publications__desc">
                        Animals socially interact during foraging and share information about the quality and location of food sources. The mechanisms of social information transfer during foraging have been mostly studied at the behavioral level, and its underlying neural mechanisms are largely unknown. Fruit flies have become a model for studying the neural bases of soc...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/335849888_Social_foraging_extends_associative_odor-food_memory_expression_in_an_automated_learning_assay_for_Drosophila">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 4 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>May 2019</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Social foraging extends associative odor-food memory expression in fruit flies ( Drosophila melanogaster )</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Cansu Tafrali, Paul Szyszka</p>
                    <p className="publications__desc">
                        Animals socially interact during foraging to share information about the quality and location of food sources. The mechanisms of social information transfer during foraging have been mostly studied at the behavioral level, and its underlying neural mechanisms are largely unknown. The fruit fly Drosophila melanogaster has become a model for studying...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/333046926_Social_foraging_extends_associative_odor-food_memory_expression_in_fruit_flies_Drosophila_melanogaster">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 5 pr-5 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Feb 2019</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Data S1. 3D Flight Trajectories, Related to Figures 2 and 3</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Tilman Triphan, Paul Szyszka</p>
                    <p className="publications__desc">
                        The CSV file contains 186,182 rows. The 13 columns contain the following information per column: 1. The odorant pair used in the experiment for the attractive odorant (A) and aversive odorant (B), or the conditioned odorants CS+ and CS−. 2. The video file name for each experiment, containing the date, experimenter initials, and the odorants used. 3...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/331884012_Data_S1_3D_Flight_Trajectories_Related_to_Figures_2_and_3">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 6 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Feb 2019</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Document S1. Transparent Methods, Figures S1–S3, and Tables S1 and S2</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Tilman Triphan, Paul Szyszka</p>
                    <p className="publications__desc">
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/331884012_Data_S1_3D_Flight_Trajectories_Related_to_Figures_2_and_3">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>
            
            {/* 7 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Feb 2019</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Olfactory Object Recognition Based on Fine-Scale Stimulus Timing in Drosophila</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Tilman Triphan, Paul Szyszka</p>
                    <p className="publications__desc">
                        Odorants of behaviorally relevant objects (e.g., food sources) intermingle with those from other sources. Therefore to determine whether an odor source is good or bad—without actually visiting it—animals first need to segregate the odorants from different sources. To do so, animals could use temporal stimulus cues, because odorants from one source...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/331884243_Document_S1_Transparent_Methods_Figures_S1-S3_and_Tables_S1_and_S2">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 8 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Sep 2018</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Olfactory object recognition based on fine-scale stimulus timing in Drosophila</h4>
                    <p className="publications__authors">Authors: Aarti Sehdev, Yunusa Mohammed Garba, Tilman Triphan, Paul Szyszka</p>
                    <p className="publications__desc">
                        Odorants of behaviorally relevant objects (e.g., food sources) intermingle with those from other sources. Therefore, to sniff out whether an odor source is good or bad - without actually visiting it - animals first need to segregate the odorants from different sources. To do so, animals could use temporal cues, since odorants from one source exhibi...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/327765780_Olfactory_object_recognition_based_on_fine-scale_stimulus_timing_in_Drosophila">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 9 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jul 2018</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">African Neuroscience on the Global Stage: Nigeria as a Model </h4>
                    <p className="publications__authors">Authors: Mahmoud Bukar Maina Yunusa Mohammed Garba Ali Maina Bukar, Tom Baden, et al</p>
                    <p className="publications__desc">
                        Several challenges contribute to Africa’s trailing position in the global production of knowledge. Decades of focused work through international and local programmes have thus far been unable to lift the continent onto its scientific feet. To learn more about the strengths and weaknesses of neuroscience research carried out on the continent today,...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/326192931_African_Neuroscience_on_the_Global_Stage_Nigeria_as_a_Model">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 10 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Nov 2014</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Drosophila as a Model for Neuroscience Research in Africa</h4>
                    <p className="publications__authors">Authors: Mahmoud Bukar Maina, Yunusa Mohammed Garba</p>
                    <p className="publications__desc">
                        Understanding normal physiology and pathophysiology requires a good model system that could simulate diverse biological phenomenon as they relate to human conditions. With it’s used in scientific research dating over a century, the short lifespan, well defined anatomy and physiology and genetic tractability of Drosophila melanogaster has made it an...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/271704261_Drosophila_as_a_Model_for_Neuroscience_Research_in_Africa">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 11 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Nov 2012</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Comparison of the Attraction Index of Male and Female Drosophila Melanogaster to Varying Odorant Substances</h4>
                    <p className="publications__authors">Authors: Summat Abba J., Olusakin Samuel Sunday Dare, A O Okpanachi, et al</p>
                    <p className="publications__desc">
                        This study aims at investigating the differences if any, in the olfactory discrematory ability of wild type drosophila and mutated Or83b type and also if these differences exists between male and females of both species. Insect and mammalian olfactory systems are strikingly similar. Therefore, Drosophila can be used as a simple model for olfaction....
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/280529813_Comparison_of_the_Attraction_Index_of_Male_and_Female_Drosophila_Melanogaster_to_Varying_Odorant_Substances">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 12 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Oct 2012</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Determination of Angles of Torsion and Retroversion of the Humerus of Male and Female Skeleton Specimens in Uganda</h4>
                    <p className="publications__authors">Authors: Samuel Sunday Dare, Masilili Godfrey, Gabriel Okumu, A.O. Okpanachi, et al</p>
                    <p className="publications__desc">
                        Several studies have been done on the measurement of angles of humeral torsion and retroversion in different parts of the world but no records to show for any done in Uganda. In this study we aimed to determine the angles of humeral torsion and retroversion of adult skeletons in Uganda and to compare the observation in this study with the findings...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/308119128_Determination_of_Angles_of_Torsion_and_Retroversion_of_the_Humerus_of_Male_and_Female_Skeleton_Specimens_in_Uganda">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 13 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jun 2012</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Antioxidant Effect of Carica papaya on Ethanol Induced Gastric Lesion in Adult Male Wistar Rats</h4>
                    <p className="publications__authors">Authors: Okesina Akeem, S B Mesole, J. Olusakin, E A Caxton-Martins, et al</p>
                    <p className="publications__desc">
                        This study was performed to elucidate the role of some important constituents of antioxidant defence such as Glutathione Peroxidase (GPx), Thiobarbituric Acid Reaction (TBAR), the activity of the enzyme Glucose-6-Phosphate Dehydrogenase (G-6-PDH) of Carica papaya on ethanol induced gastric lesion in adult male wistar rats. Twenty-four male adult Wi...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/278569595_Antioxidant_Effect_of_Carica_papaya_on_Ethanol_Induced_Gastric_Lesion_in_Adult_Male_Wistar_Rats">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 14 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jun 2012</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Assessment of the relationship between Digit Lengths and Circumferences of the Hip Amongst Ugandans</h4>
                    <p className="publications__authors">Authors: Summat Abba, Gabriel Okumu, Marera Domnic, A.O. Okpanachi, et al</p>
                    <p className="publications__desc">
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/318984199_Assessment_of_the_relationship_between_Digit_Lengths_and_Circumferences_of_the_Hip_Amongst_Ugandans_by_S_Abba_Okumu_Gabriel_Marera_Domnic_Masilili_Godfrey_SS_Dare_YG_Mohammed_and_AO_Okpanachi_in_the_A">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 15 */}
            <Row className="mb-5 pr-5" data-aos="fade-up" data-aos-once="true">
                <Col sm={{offset:1}}>
                    <h3>Jan 2012</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Comparison of the Attraction Index of Male and Female Drosophila Melanogaster to Varying Odorant Substances 1</h4>
                    <p className="publications__authors">Authors: Sunday Abba, J. Olusakin, Samuel Sunday Dare, A O Okpanachi, et al</p>
                    <p className="publications__desc">
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/348678354_Comparison_of_the_Attraction_Index_of_Male_and_Female_Drosophila_Melanogaster_to_Varying_Odorant_Substances_1">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>

            {/* 16 */}
            <Row className="pb-5 pr-5">
                <Col sm={{offset:1}}>
                    <h3>Jan 2011</h3>
                </Col>
                <Col sm="9">
                    <h4 className="publications__title">Evaluation of Some Risk Factors for Atherosclerosis in the Circle of Willis Observed at  </h4>
                    <p className="publications__authors">Authors: J. Olusakin, Teru Goji, Ezekiel JOSHUA Iliya, O O Oladipo, et al</p>
                    <p className="publications__desc">
                        There has been a steady change in lifestyle of the Nigerians causing the increase in vulnerability of cerebrovascular disease like atherosclerosis. This study was aimed at evaluating some risk factors for atherosclerosis in the circle of Willis autopsy. The clinical record of patients were retrieved from their case files in order to obtain informat...
                        <p className="publications__links"><a target="" href="https://www.researchgate.net/publication/272825870_Evaluation_of_Some_Risk_Factors_for_Atherosclerosis_in_the_Circle_of_Willis_Observed_at">direct Link </a></p>
                    </p>
                    
                </Col>
            </Row>
        </Container>
    )
}
