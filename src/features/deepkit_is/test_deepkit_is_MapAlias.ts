import { is } from "@deepkit/type";

import { MapAlias } from "../../structures/MapAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_MapAlias = _test_deepkit_is(
    "MapAlias",
    MapAlias.generate,
    (input) => is<MapAlias>(input),
    MapAlias.SPOILERS,
);