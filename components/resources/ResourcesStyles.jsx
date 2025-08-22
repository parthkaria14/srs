export default function ResourcesStyles() {
  return (
    <style jsx>{`
      .slider::-webkit-slider-thumb {
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #134b70;
        cursor: pointer;
        border: 2px solid #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .slider::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #134b70;
        cursor: pointer;
        border: 2px solid #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .slider::-webkit-slider-track {
        height: 6px;
        background: #e5e7eb;
        border-radius: 3px;
      }

      .slider::-moz-range-track {
        height: 6px;
        background: #e5e7eb;
        border-radius: 3px;
      }

      /* Dialog overlay blur effect */
      [data-radix-dialog-overlay],
      .fixed.inset-0.z-50,
      [data-state="open"] {
        backdrop-filter: blur(12px) !important;
        background: rgba(0, 0, 0, 0.7) !important;
      }

      /* Additional blur for dialog container */
      .fixed.inset-0.z-50.bg-background\/80 {
        backdrop-filter: blur(12px) !important;
        background: rgba(0, 0, 0, 0.7) !important;
      }
    `}</style>
  );
}
