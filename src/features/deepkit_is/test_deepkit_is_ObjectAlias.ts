import { is } from "@deepkit/type";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectAlias = _test_deepkit_is(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => is<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);