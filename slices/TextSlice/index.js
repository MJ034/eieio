/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextSlice;
