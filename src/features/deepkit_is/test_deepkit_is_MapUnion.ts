import { is } from "@deepkit/type";

import { MapUnion } from "../../structures/MapUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_MapUnion = _test_deepkit_is(
    "MapUnion",
    MapUnion.generate,
    (input) => is<MapUnion>(input),
    MapUnion.SPOILERS,
);