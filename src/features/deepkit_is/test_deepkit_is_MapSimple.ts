import { is } from "@deepkit/type";

import { MapSimple } from "../../structures/MapSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_MapSimple = _test_deepkit_is(
    "MapSimple",
    MapSimple.generate,
    (input) => is<MapSimple>(input),
    MapSimple.SPOILERS,
);