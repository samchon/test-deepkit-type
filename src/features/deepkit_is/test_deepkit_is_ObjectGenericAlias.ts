import { is } from "@deepkit/type";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectGenericAlias = _test_deepkit_is(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => is<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);