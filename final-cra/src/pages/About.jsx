import styled from 'styled-components/macro';
import Title from "components/Title"
import { AboutList, AboutItem, AboutItemImage, AboutItemDesc, BigFont } from 'components/about';
import Footer from 'components/Footer/Footer';
import { ClosingContents, ClosingDesc, ClosingSub, ClosingSubDesc, ClosingTitle, ClosingTitleBold, ClosingTitleLine } from 'components/closingContent';

export const About = () => {

  const aboutData = [
    {
      id: 1,
      image: 'assets/images/aboutbg-01.jpg',
      alt: '워터파크 레저 스포츠',
      headingBold: 'ALL INCLUSIVE',
      headingLine: 'RESORT',
      description: '특급 호텔 숙박, 전 일정 식사, 대형 워터파크에서의 모든 레저 스포츠 시설 이용은 물론 스포츠 강습과 장비 대여까지 모두 무료로 즐길 수 있는 올 인크루시브(All Inclusive) 리조트입니다.',
      bigFontColor: 'pink',
      bigFontContent: 'DOBBY'
    }, {
      id: 2,
      image: 'assets/images/aboutbg-02.jpg',
      alt: '워터파크 뷰',
      headingBold: 'ACTIVITY',
      headingLine: 'DIF',
      description: '남태평양의 아름다운 섬 괌과 사이판에 위치하여 있으며 DIF괌에는 70여 가지, PIC사이판에는 40여 가지의 액티비티가 준비되어 있습니다. 인공수족관과 라군카약(괌), 포인트 브레이크와 레이지 리버(사이판) 등 다양한 종류의 워터파크 시설이 있으며 해변에서는 세일링과 카약을 타거나 선베드에 누워 드넓게 펼쳐진 바다를 감상할 수 있습니다.',
      bigFontColor: 'orange',
      bigFontContent: 'ISLANDS'
    }, {
      id: 3,
      image: 'assets/images/aboutbg-03.jpg',
      alt: '클럽 메이트',
      headingBold: 'CLUB',
      headingLine: 'MATES',
      description: '어린 자녀들을 위한 수영장을 별도로 운영하고 있으며 언제 어디서나 친구가 되어주는 만능 엔터테이너 클럽메이트가 있어 더욱 즐거운 휴가가 펼쳐집니다. 만 4세부터 11세 이하 어린이를 무료로 돌봐주는 키즈클럽을 운영 중으로 자녀들은 세계 각국의 친구들과 함께 스포츠, 게임, 영화감상 등 다양한 놀이를 즐기며 영어와 친해집니다.',
      bigFontColor: 'blue',
      bigFontContent: 'FREE'
    }
  ]

  return (
    <StyledAbout>
      <StyledAboutInner>
        <div style={{ width: '100px', height: '308px' }}></div>
        <Title>
          DIF의 모든 순간, <br />
          잊지 못할 특별한 행복의 순간이 됩니다
        </Title>
        <AboutList>
          {
            aboutData.map((item, idx) => {
              return (
                <AboutItem key={item.id}>
                  <AboutItemImage>
                    <img src={require(`assets/images/aboutbg-0${idx + 1}.jpg`)} alt={item.alt} />
                  </AboutItemImage>
                  <AboutItemDesc>
                    <h3>
                      <strong className="bold full">{item.headingBold}</strong>
                      <strong className="line">{item.headingLine}</strong>
                    </h3>
                    <p>{item.description}</p>
                  </AboutItemDesc>
                  <BigFont idx={idx} color={item.bigFontColor}>
                    {item.bigFontContent}
                  </BigFont>
                </AboutItem>
              )
            })
          }
        </AboutList>
      </StyledAboutInner>
      <StyledBottomPadding>
        <ClosingContents>
          <ClosingSub>깨끗하고 안전한 리조트</ClosingSub>
          <ClosingTitle>
            <ClosingTitleLine>DIF</ClosingTitleLine> <ClosingTitleBold>CARES Program</ClosingTitleBold>
          </ClosingTitle>
          <ClosingDesc>
            도비 아일랜드 프리는 코로나바이러스감염증-19(COVID-19)로 인한 재난 상황에 대해 PIC케어(CARES) 프로그램을 통한 모든 시설에 대한 청결, 소독, 안전조치를 시행하고 있습니다.
          </ClosingDesc>
          <ClosingDesc>
            DIF케어(CARES) 프로그램은 강화된 청결과 소독 조치를 통해 투숙객과 직원들의 안전을 목표로 합니다.
          </ClosingDesc>
          <ClosingSubDesc>
            ◈ 저희 리조트는 의료용 소독 제품을 사용합니다. 모든 화학 물질, 세척 제품 및 각 절차는 미국환경보호청(EPA), 식품의약품안전청(FDA), ServeSafe® 및 질병관리본부(CDC)가 정한 지침을 준수합니다.
          </ClosingSubDesc>
        </ClosingContents>
      </StyledBottomPadding>
      <Footer />
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  overflow: hidden;
`
const StyledAboutInner = styled.section`
  max-width: 73.75rem;
  margin:0 auto;
`
const StyledBottomPadding = styled.section`
  padding:12.5rem 0;
`
