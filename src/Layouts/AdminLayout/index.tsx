import { Outlet } from 'react-router-dom';
import { useLoadingContext } from '../../hooks/useLoading';

export function AdminLayout() {
  const { isLoading } = useLoadingContext();
  return (
    <>
      {isLoading && (
        <div>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="96" height="96" fill="url(#pattern0_549_697)" />
            <defs>
              <pattern id="pattern0_549_697" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_549_697" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_549_697"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6ElEQVR4nO3c32oTQRTH8R+VJg8Re12w7bNY+vclbJ5DbZWKRR9AESqFPoB/Lq1eKVRJ/fcGKiZ6WamsTGAR3d3ZnWHPTr4fGAhpOps9J52zmZNGAgAAAAAAAOzpSxpKeinppxvZ7R33M0Q0kPRG0sV/xmv3GETQLwl+Pgn8JUQwrBD86bgW4wnMulceCTjxmJeaUtEPjwRMKs5JTWkxAX1qSrtL0HAWasqCpCP3iszGsaTFmnPtBA5YrJpiKvhf/3Ey39zPfPXdJWaVy9BeSzXFlKOCE3pcc85BSRJ83ogln4BJwQmNG8zbc0vMiQtiNl64+6q88mdmCSpKwPe2n5zC1xRzjgtO6LDtJ6fwNcWcRVdw/z6hL5Iuy4ZBwJpi0oIruGM3Dg0FP3RNAQAAAABEQg+5RfSQW0QPuWUme8ghe77WmWvghO75WmeuhRmj52uZuQTE6vlaZW4Jst7zTb6HbL3nm3wPuQs93+R7yF3o+YZGDxkAAAAAIlmRdEfS29x3UmS39yUtxzoo9GfP556kXwVbDueSDvj0dJzgP/fY9XxGEsK67xH86bgrw7rUM14pWXaKlqMlGdS1nvF+jeBPx20Z1LWe8bsGCTiVQV3rGU8aJMDkP3LH6Bn3JG1LeiTpLHd9fubu22pwVZJcAkL3jNclfa4QjE+S1mrMn9wSFKpnfEnSXo2g7Eqam+UiHKpnvNcgMDc9jrPsLil9j5H9zhUlar1B8Kdj1eN4BzXmz/aLktSruOaXjY8ehTl73FOPuZ9ImleitgMEfzo2PY7bc9sLRcvRuXvlJxt8ucvKUAl4KH9Lrrie5r5DIrt9K+U1P+9DwARk7xMQ8ePgFyUjmwstJmBM9P29D5iAEQlotwg/IAH+tgImYIME+Jt3b6KaBj97M8dXj9W0FiABV3n1N7PbIPjXCX5zc25X0zf4Nzy3o1FitWJNyB7DshOxMG+6vZ1Rbo9m5O7bSH2DDAAAAAAAAOq836+c4pabVYFmAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </div>
      )}
      <Outlet />
    </>
  );
}
