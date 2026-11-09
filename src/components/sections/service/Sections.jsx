// Maps a service page's middle sections (from its data file) to components.
// Each entry is { type, ...props }. Add new section types here when needed.
import { WhyChoose, Stats, ProcessCards, IconCards, CardGrid, StepRow, ResultsChecklist, ThreeBlocks, ServiceRows, ImageStrip, GalleryShowcase, PerspectiveShowcase, SkewShowcase } from './ServiceSections';
import { RelatedSlider, PercentCircles } from './ServiceClient';
import { ServiceCards, ListRows, PortfolioList, PricingSection } from '@/components/sections/digital/DigitalSections';
import { PinnedPortraits, DarkCallout, ProjectGallery } from '@/components/sections/production/ProductionSections';
import { Process, TeamCards } from '@/components/sections/home/HomeSections';
import { Guide } from '@/components/sections/Article';

const TYPES = {
  whyChoose: WhyChoose,
  stats: Stats,
  processCards: ProcessCards,
  iconCards: IconCards,
  cardGrid: CardGrid,
  stepRow: StepRow,
  results: ResultsChecklist,
  threeBlocks: ThreeBlocks,
  serviceRows: ServiceRows,
  imageStrip: ImageStrip,
  galleryShowcase: GalleryShowcase,
  perspectiveShowcase: PerspectiveShowcase,
  skewShowcase: SkewShowcase,
  relatedSlider: RelatedSlider,
  percentCircles: PercentCircles,
  stackedCards: ServiceCards,
  listRows: ListRows,
  portfolioList: PortfolioList,
  pricing: PricingSection,
  pinnedReels: PinnedPortraits,
  mediaCallout: DarkCallout,
  projectGallery: ProjectGallery,
  stickyProcess: Process,
  portraitCards: TeamCards,
  guide: Guide,
};

export default function Sections({ sections }) {
  return sections.map(({ type, ...props }, i) => {
    const Component = TYPES[type];
    if (!Component) throw new Error(`Unknown section type "${type}"`);
    return <Component key={`${type}-${i}`} {...props} />;
  });
}
